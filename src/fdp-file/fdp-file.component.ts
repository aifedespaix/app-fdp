import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FdpFile} from './fdp-file';

@Component({
    selector: 'app-fdp-file',
    templateUrl: './fdp-file.component.html',
    styleUrls: ['./fdp-file.component.scss'],
})
export class FdpFileComponent {

    public form: FormGroup;
    public file: FdpFile;
    public loading: boolean;
    public error: string;

    @ViewChild('fileInput') fileInput: ElementRef;

    constructor(private fb: FormBuilder) {
        this.loading = false;
        this.file = new FdpFile();
        this.error = '';
        this.createForm();
    }

    createForm() {
        this.form = this.fb.group({
            file: this.file.formResult,
        });
    }

    uploadFile(event) {
        // this.error = null;
        // try {
        //     if (event.target.files && event.target.files.length > 0) {
        //         this.file.saveMiniature(event.target.files[0]);
        //     } else {
        //         this.error = 'Fichier Invalide';
        //     }
        // } catch (err) {
        //     this.error = err.message;
        // }
    }
}
