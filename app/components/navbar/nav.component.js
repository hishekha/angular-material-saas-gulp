System.register(['@angular/core', '@angular2-material/icon', '@angular2-material/sidenav', '@angular2-material/toolbar', '@angular2-material/button', '@angular2-material/list'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, icon_1, sidenav_1, toolbar_1, button_1, list_1;
    var NavigationBarComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            },
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (list_1_1) {
                list_1 = list_1_1;
            }],
        execute: function() {
            let NavigationBarComponent = class NavigationBarComponent {
                constructor() {
                    this.brand = "BillingApi";
                }
            };
            NavigationBarComponent = __decorate([
                core_1.Component({
                    selector: 'navbar',
                    templateUrl: '/app/components/navbar/nav.component.html',
                    directives: [
                        sidenav_1.MD_SIDENAV_DIRECTIVES,
                        button_1.MD_BUTTON_DIRECTIVES,
                        list_1.MD_LIST_DIRECTIVES,
                        toolbar_1.MdToolbar,
                        icon_1.MdIcon
                    ],
                    providers: [icon_1.MdIconRegistry]
                }), 
                __metadata('design:paramtypes', [])
            ], NavigationBarComponent);
            exports_1("NavigationBarComponent", NavigationBarComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyL25hdi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFvQkE7Z0JBQUE7b0JBQ0UsVUFBSyxHQUFVLFlBQVksQ0FBQTtnQkFDN0IsQ0FBQztZQUFELENBQUM7WUFkRDtnQkFBQyxnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBRSxRQUFRO29CQUNsQixXQUFXLEVBQUUsMkNBQTJDO29CQUN4RCxVQUFVLEVBQUU7d0JBQ1IsK0JBQXFCO3dCQUNyQiw2QkFBb0I7d0JBQ3BCLHlCQUFrQjt3QkFDbEIsbUJBQVM7d0JBQ1QsYUFBTTtxQkFDUDtvQkFDSCxTQUFTLEVBQUUsQ0FBQyxxQkFBYyxDQUFDO2lCQUM1QixDQUFDOztzQ0FBQTtZQUNGLDJEQUVDLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9uYXZiYXIvbmF2LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TWRJY29uLCBNZEljb25SZWdpc3RyeX0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHtNRF9TSURFTkFWX0RJUkVDVElWRVN9IGZyb20gJ0Bhbmd1bGFyMi1tYXRlcmlhbC9zaWRlbmF2JztcbmltcG9ydCB7TWRUb29sYmFyfSBmcm9tICdAYW5ndWxhcjItbWF0ZXJpYWwvdG9vbGJhcic7XG5cbmltcG9ydCB7IE1EX0JVVFRPTl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQge01EX0xJU1RfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIyLW1hdGVyaWFsL2xpc3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYXZiYXInLFxuICB0ZW1wbGF0ZVVybDogJy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2LmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1xuICAgICAgTURfU0lERU5BVl9ESVJFQ1RJVkVTLFxuICAgICAgTURfQlVUVE9OX0RJUkVDVElWRVMsXG4gICAgICBNRF9MSVNUX0RJUkVDVElWRVMsXG4gICAgICBNZFRvb2xiYXIsXG4gICAgICBNZEljb25cbiAgICBdLFxuICBwcm92aWRlcnM6IFtNZEljb25SZWdpc3RyeV1cbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkJhckNvbXBvbmVudCB7XG4gIGJyYW5kOnN0cmluZyA9IFwiQmlsbGluZ0FwaVwiXG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
