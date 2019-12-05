import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material';
import {SnackbarComponent} from '../../components/snackbar/snackbar.component';

@Injectable()
export class SnackService {

  constructor(
    private readonly snackBar: MatSnackBar,
  ) {
  }

  public success(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 5000,
      data: {
        icon: 'done',
        color: 'primary',
        message,
      },
    });
  }

  public error(message: string) {
    this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 5000,
      data: {
        icon: 'error',
        color: 'warn',
        message,
      },
    });
  }

}
