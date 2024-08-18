import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user = {
    firstName: 'Ali',
    lastName: 'Veli',
    email: 'ali.veli@example.com',
    phone: '123-456-7890',
    profilePicture: null
  };

  constructor() { }

  ngOnInit(): void {
    // Kullanıcı bilgilerini yüklemek için gerekli işlemler burada yapılabilir.
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.user.profilePicture = file;
      // Profil resmini yükleme işlemi burada yapılabilir.
    }
  }

  saveChanges(): void {
    // Bilgileri güncelleme işlemleri burada yapılabilir.
    console.log('Kullanıcı bilgileri güncellendi:', this.user);
  }
}
