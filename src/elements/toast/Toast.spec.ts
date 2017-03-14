// NG2
import { TestBed, async } from '@angular/core/testing';
// App
import { NovoToastElement } from './Toast';
import { NovoLabelService } from '../../services/novo-label-service';

describe('Elements: NovoToastElement', () => {
    let fixture;
    let component;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                NovoToastElement
            ],
            providers: [
                { provide: NovoLabelService, useClass: NovoLabelService }
            ]
        }).compileComponents();
        fixture = TestBed.createComponent(NovoToastElement);
        component = fixture.debugElement.componentInstance;
    }));

    it('should initialize correctly', () => {
        expect(component).toBeTruthy();
    });
});
