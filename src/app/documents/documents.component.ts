import { Component } from '@angular/core';
import { Document } from './document';

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html',
    styleUrls: ['documents.component.css']
})

export class DocumentsComponent {
    pageTitle: string = "Document Dashboard"
    
    documents: Document[] = [
        {
            title: 'My first doc',
            description: 'abcxyz',
            file_url: 'google.com',
            updated_at: '17/05/2017',
            image_url: 'http://www.publicdomainpictures.net/pictures/220000/t2/los-gehts.jpg'
        },
        {
            title: 'My second doc',
            description: 'abcxyz',
            file_url: 'google.com',
            updated_at: '17/05/2017',
            image_url: 'https://static.pexels.com/photos/156/man-person-apple-iphone.jpg'
        },
        {
            title: 'My last doc',
            description: 'abcxyz',
            file_url: 'google.com',
            updated_at: '17/05/2017',
            image_url: 'https://cdn.pixabay.com/photo/2014/12/27/15/40/office-581131_960_720.jpg'
        },
    ]
}