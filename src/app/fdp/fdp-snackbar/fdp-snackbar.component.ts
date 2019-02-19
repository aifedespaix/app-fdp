import {ChangeDetectorRef, Component, Inject, OnInit} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material';
import {Subscription, timer} from 'rxjs';

export class FdpSnackBar {
  icon: string;
  message: string;
  color: string;
}

@Component({
  selector: 'app-fdp-snackbar',
  templateUrl: './fdp-snackbar.component.html',
  styleUrls: ['./fdp-snackbar.component.scss'],
})
export class FdpSnackbarComponent implements OnInit {

  private timerSubscription: Subscription;
  private readonly duration: number;
  public subscribeTimer: number;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    @Inject(MAT_SNACK_BAR_DATA) public data: FdpSnackBar,
    public snackBarRef: MatSnackBarRef<FdpSnackbarComponent>,
  ) {
    this.duration = this.snackBarRef.containerInstance.snackBarConfig.duration / 1000;
    this.subscribeTimer = this.duration ? this.duration : null;
  }

  ngOnInit(): void {
    this.snackBarRef.afterOpened().subscribe(() => {
      this.oberserableTimer();
    });

    this.snackBarRef.afterDismissed().subscribe(() => {
      this.timerSubscription.unsubscribe();
    });
  }

  private oberserableTimer() {
    if (!this.duration) {
      return;
    }

    const source = timer(0, 1000);
    this.timerSubscription = source.subscribe(val => {
      this.subscribeTimer = this.duration - val;
      this.changeDetectorRef.detectChanges();
    });
  }

  public close() {
    this.snackBarRef.dismiss();
  }
}
