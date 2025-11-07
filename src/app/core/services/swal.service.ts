import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon } from 'sweetalert2';

export interface SwalOptions {
  title: string;
  text?: string;
  icon?: SweetAlertIcon;
  confirmButtonText?: string;
  cancelButtonText?: string;
  timer?: number; // in milliseconds
  type?: 'toast' | 'swal';
  footer?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SwalService {
  constructor() {}

  /**
   * Show a confirmation dialog
   * @param options - Dialog configuration options
   * @returns Promise<boolean> - true if confirmed, false if cancelled
   */
  async confirm(options: SwalOptions): Promise<boolean> {
    const {
      title,
      text = '',
      icon = 'warning',
      confirmButtonText = 'Confirm',
      cancelButtonText = 'Cancel',
      timer,
      type = 'swal',
      footer,
    } = options;

    if (type === 'toast') {
      return this.showToastConfirm(options);
    }

    // If timer is set, show countdown with disabled confirm button
    if (timer) {
      return this.showConfirmWithCountdown({
        title,
        text,
        icon,
        confirmButtonText,
        cancelButtonText,
        timer,
        footer
      });
    }

    const result = await Swal.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      confirmButtonText,
      cancelButtonText,
      reverseButtons: false, // Confirm on left, cancel on right
      focusCancel: true,
      footer,
    });

    return result.isConfirmed;
  }

  /**
   * Show a confirmation dialog with countdown timer
   */
  private async showConfirmWithCountdown(options: SwalOptions): Promise<boolean> {
    const {
      title,
      text = '',
      icon = 'warning',
      confirmButtonText = 'Confirm',
      cancelButtonText = 'Cancel',
      timer = 5000,
      footer
    } = options;

    let timeLeft = Math.ceil(timer / 1000); // Convert to seconds
    let intervalId: any;

    const result = await Swal.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      confirmButtonText: `${confirmButtonText} (${timeLeft})`,
      cancelButtonText,
      reverseButtons: false, // Confirm on left, cancel on right
      focusCancel: true,
      allowEnterKey: false,
      didOpen: () => {
        const confirmButton = Swal.getConfirmButton();
        if (confirmButton) {
          confirmButton.disabled = true;
          confirmButton.style.opacity = '0.5';
          confirmButton.style.cursor = 'not-allowed';
        }

        intervalId = setInterval(() => {
          timeLeft--;
          
          if (confirmButton) {
            if (timeLeft > 0) {
              confirmButton.textContent = `${confirmButtonText} (${timeLeft})`;
            } else {
              confirmButton.textContent = confirmButtonText;
              confirmButton.disabled = false;
              confirmButton.style.opacity = '1';
              confirmButton.style.cursor = 'pointer';
              clearInterval(intervalId);
            }
          }
        }, 1000);
      },
      footer,
      willClose: () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      }
    });

    return result.isConfirmed;
  }

  /**
   * Show a toast notification with confirmation
   */
  private async showToastConfirm(options: SwalOptions): Promise<boolean> {
    const {
      title,
      icon = 'warning',
      confirmButtonText = 'Confirm',
      cancelButtonText = 'Cancel',
      timer
    } = options;

    const result = await Swal.fire({
      toast: true,
      position: 'top-end',
      title,
      icon,
      showCancelButton: true,
      confirmButtonText,
      cancelButtonText,
      timer,
      timerProgressBar: timer ? true : false,
      showCloseButton: true,
    });

    return result.isConfirmed;
  }

  /**
   * Show a success toast
   */
  success(title: string, timer: number = 3000): void {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'success',
      title,
      showConfirmButton: false,
      timer,
      timerProgressBar: true,
    });
  }

  /**
   * Show an error toast
   */
  error(title: string, timer: number = 3000): void {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'error',
      title,
      showConfirmButton: false,
      timer,
      timerProgressBar: true,
    });
  }

  /**
   * Show an info toast
   */
  info(title: string, timer: number = 3000): void {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon: 'info',
      title,
      showConfirmButton: false,
      timer,
      timerProgressBar: true,
    });
  }
}
