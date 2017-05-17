import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
    moduleId: module.id,
    selector: 'proposal-list',
    templateUrl: 'proposal-list.component.html',
    styleUrls: ['proposal-list.component.css']
})

export class ProposalListComponent {
    proposalOne: Proposal = new Proposal(15, 'Abc company',
        'http://portfolio.lmtien.com', 'Ruby on Rails', 150, 120, 15, 'lmtien@pro.com')
    proposalTwo: Proposal = new Proposal(99, 'Xyz company',
        'http://portfolio.lmtien.com', 'Ruby on Rails', 150, 120, 15, 'lmtien@pro.com')
    proposalThree: Proposal = new Proposal(300, 'Whatever company',
        'http://portfolio.lmtien.com', 'Ruby on Rails', 150, 120, 15, 'lmtien@pro.com')
        
    proposals: Proposal[] = [
        this.proposalOne,
        this.proposalTwo,
        this.proposalThree
    ]
}