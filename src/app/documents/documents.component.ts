import { Component } from '@angular/core';
import { Document } from './document';

@Component({
    moduleId: module.id,
    selector: 'documents',
    templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
    pageTitle: string = "Document Dashboard"
    
    documents: Document[] = [
        {
            title: 'My first doc',
            description: 'abcxyz',
            file_url: 'google.com',
            updated_at: '17/05/2017',
            image_url: 'google.com'
        },
        {
            title: 'My second doc',
            description: 'abcxyz',
            file_url: 'google.com',
            updated_at: '17/05/2017',
            image_url: 'google.com'
        },
        {
            title: 'My last doc',
            description: 'abcxyz',
            file_url: 'google.com',
            updated_at: '17/05/2017',
            image_url: 'google.com'
        },
    ]
}