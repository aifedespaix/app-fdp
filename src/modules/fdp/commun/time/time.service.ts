import {Injectable} from '@angular/core';

@Injectable()
export class TimeService {

  /**
   * @param time Format : hh:mm:ss
   */
  public timeToSecond(time: string): number {
    const timing = time.split(':');
    if (timing.length !== 3) {
      throw Error('Format de durée invalide')
    }
    return parseInt(timing[0]) * 60 * 60 + parseInt(timing[1]) * 60 + parseInt(timing[2]);
  }

  /**
   * From seconds to time (Format : hh:mm:ss)
   */
  public secondToTime(seconds: number): string {
    let hours = '00';
    if (seconds % (60 * 60) !== seconds) {
      const calcHours = Math.floor(seconds / (60 * 60));
      hours = calcHours.toString().padStart(2, '0');
      seconds -= calcHours * 60 * 60;
    }

    let minutes = '00';
    if (seconds % 60 !== seconds) {
      const calcMinutes = Math.floor(seconds / 60);
      minutes = calcMinutes.toString().padStart(2, '0');
      seconds -= calcMinutes * 60;
    }

    return hours + ':' + minutes + ':' + seconds.toString().padStart(2, '0');
  }
}
