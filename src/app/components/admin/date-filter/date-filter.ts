import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface DayCell {
  date: Date;
  label: number;
  inMonth: boolean;
  isToday?: boolean;
  isSelected?: boolean;
}

@Component({
  selector: 'app-date-filter',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, CommonModule],
  templateUrl: './date-filter.html',
})
export class DateFilter implements OnInit {
  @Input() initialDate?: Date | null = null;
  @Output() apply = new EventEmitter<Date | null>();
  @Output() cancel = new EventEmitter<void>();

  @ViewChild('trigger') triggerRef!: ElementRef;

  showPanel = false;
  selectedDate: Date | null = null;
  tempDate: Date | null = null;

  viewMonth!: number;
  viewYear!: number;
  weeks: DayCell[][] = [];

  ngOnInit(): void {
    this.selectedDate = this.initialDate ? new Date(this.initialDate) : null;
    const pivot = this.selectedDate ?? new Date();
    this.viewMonth = pivot.getMonth();
    this.viewYear = pivot.getFullYear();
    this.tempDate = this.selectedDate ? new Date(this.selectedDate) : null;
    this.buildCalendar(this.viewYear, this.viewMonth);
  }

  formatDate(d?: Date | null) {
    if (!d) return '';
    return `${String(d.getDate()).padStart(2, '0')}-${String(d.getMonth() + 1).padStart(
      2,
      '0'
    )}-${d.getFullYear()}`;
  }

  openPanel() {
    this.tempDate = this.selectedDate ? new Date(this.selectedDate) : null;
    const pivot = this.tempDate ?? new Date();
    this.viewMonth = pivot.getMonth();
    this.viewYear = pivot.getFullYear();
    this.buildCalendar(this.viewYear, this.viewMonth);
    this.showPanel = true;
  }

  closePanel() {
    this.showPanel = false;
  }

  prevMonth() {
    if (this.viewMonth === 0) {
      this.viewMonth = 11;
      this.viewYear--;
    } else {
      this.viewMonth--;
    }
    this.buildCalendar(this.viewYear, this.viewMonth);
  }

  nextMonth() {
    if (this.viewMonth === 11) {
      this.viewMonth = 0;
      this.viewYear++;
    } else {
      this.viewMonth++;
    }
    this.buildCalendar(this.viewYear, this.viewMonth);
  }

  buildCalendar(year: number, month: number) {
    const first = new Date(year, month, 1);
    const start = new Date(year, month, 1 - first.getDay());
    const today = new Date();
    const weeks: DayCell[][] = [];

    for (let w = 0; w < 6; w++) {
      const week: DayCell[] = [];
      for (let d = 0; d < 7; d++) {
        const curr = new Date(start);
        curr.setDate(start.getDate() + w * 7 + d);

        week.push({
          date: curr,
          label: curr.getDate(),
          inMonth: curr.getMonth() === month,
          isToday: curr.toDateString() === today.toDateString(),
          isSelected: this.tempDate ? curr.toDateString() === this.tempDate.toDateString() : false,
        });
      }
      weeks.push(week);
    }

    this.weeks = weeks;
  }

  onSelectDay(cell: DayCell) {
    this.tempDate = new Date(cell.date);
    this.buildCalendar(this.viewYear, this.viewMonth);
  }

  onApply() {
    this.selectedDate = this.tempDate ? new Date(this.tempDate) : null;
    this.apply.emit(this.selectedDate);
    this.closePanel();
  }

  onCancel() {
    this.tempDate = this.selectedDate ? new Date(this.selectedDate) : null;
    this.cancel.emit();
    this.closePanel();
  }

  @HostListener('document:click', ['$event'])
  onDocClick(event: Event) {
    if (!this.showPanel) return;
    const target = event.target as Node;
    const trigger = this.triggerRef?.nativeElement;
    const panel = trigger?.parentElement?.querySelector('.date-panel');

    if (trigger.contains(target)) return;
    if (panel && panel.contains(target)) return;

    this.onCancel();
  }

  get monthLabel() {
    return new Date(this.viewYear, this.viewMonth, 1).toLocaleString('default', {
      month: 'long',
      year: 'numeric',
    });
  }
}
