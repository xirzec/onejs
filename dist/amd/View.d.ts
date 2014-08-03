import ViewModel = require('ViewModel');
import EventGroup = require('EventGroup');
declare class View {
    public viewName: string;
    public viewModelType: any;
    public id: string;
    public parent: View;
    public owner: View;
    public children: View[];
    public events: EventGroup;
    public activeEvents: EventGroup;
    public _viewModel: ViewModel;
    public _parentViewModel: ViewModel;
    public _bindings: any[];
    public _lastValues: {};
    public _subElements: any;
    public _hasChanged: boolean;
    public _isEvaluatingView: boolean;
    public _state: number;
    public _initialData: any;
    static _instanceCount: number;
    constructor(data?: any);
    public dispose(): void;
    public onInitialize(): void;
    public onRenderHtml(viewModel: any): string;
    public onActivate(): void;
    public onDeactivate(): void;
    public onViewModelChanged(): void;
    public setData(data: any, forceUpdate?: boolean): void;
    public initialize(): void;
    public renderHtml(): string;
    public activate(): void;
    public deactivate(): void;
    public addChild(view: View, owner?: View): View;
    public removeChild(view: View): View;
    public clearChildren(): void;
    public evaluateView(): void;
    public updateView(updateValuesOnly?: boolean): void;
    public getViewModel(): ViewModel;
    public getValue(propertyName: string): any;
    public setValue(propertyName: string, propertyValue: any): void;
    public _getPropName(propertyName: any): any;
    public _getPropTarget(propertyName: any): {
        view: View;
        target: any;
    };
    public _getRoot(): View;
    public _genStyle(defaultStyles: string, styleMap?: string[]): string;
    public _genClass(defaultClasses: string, classMap?: string[]): string;
    public _genAttr(defaultAttributes: string, attributeMap: string[]): string;
    public _genText(propertyName: any): string;
    public _genHtml(propertyName: any): string;
    public _bindEvents(): void;
    public _bindUtil(element: any, eventName: any, util: any): void;
    public _toggle(propertyName: string): boolean;
    public _send(sourcePropertyName: any, destinationPropertyName: any): void;
    public _bubble(eventName: string, propertyName?: string): any;
    public _findElements(): void;
    public loadStyles: (rules: any) => void;
}
export = View;
