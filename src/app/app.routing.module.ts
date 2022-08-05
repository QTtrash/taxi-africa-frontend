import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { FormLayoutDemoComponent } from "./demo/view/formlayoutdemo.component";
import { DashboardDemoComponent } from "./demo/view/dashboarddemo.component";
import { InputDemoComponent } from "./demo/view/inputdemo.component";
import { FloatLabelDemoComponent } from "./demo/view/floatlabeldemo.component";
import { InvalidStateDemoComponent } from "./demo/view/invalidstatedemo.component";
import { TableDemoComponent } from "./demo/view/tabledemo.component";
import { ListDemoComponent } from "./demo/view/listdemo.component";
import { TreeDemoComponent } from "./demo/view/treedemo.component";
import { ButtonDemoComponent } from "./demo/view/buttondemo.component";
import { PanelsDemoComponent } from "./demo/view/panelsdemo.component";
import { OverlaysDemoComponent } from "./demo/view/overlaysdemo.component";
import { MediaDemoComponent } from "./demo/view/mediademo.component";
import { MenusDemoComponent } from "./demo/view/menusdemo.component";
import { MessagesDemoComponent } from "./demo/view/messagesdemo.component";
import { MiscDemoComponent } from "./demo/view/miscdemo.component";
import { EmptyDemoComponent } from "./demo/view/emptydemo.component";
import { ChartsDemoComponent } from "./demo/view/chartsdemo.component";
import { FileDemoComponent } from "./demo/view/filedemo.component";
import { DocumentationComponent } from "./demo/view/documentation.component";
import { DisplayComponent } from "./utilities/display.component";
import { ElevationComponent } from "./utilities/elevation.component";
import { FlexboxComponent } from "./utilities/flexbox.component";
import { GridComponent } from "./utilities/grid.component";
import { IconsComponent } from "./utilities/icons.component";
import { WidgetsComponent } from "./utilities/widgets.component";
import { SpacingComponent } from "./utilities/spacing.component";
import { TypographyComponent } from "./utilities/typography.component";
import { TextComponent } from "./utilities/text.component";

import { AppCrudComponent } from "./pages/app.crud.component";
import { AppCalendarComponent } from "./pages/app.calendar.component";
import { AppMainComponent } from "./app.main.component";
import { AppErrorComponent } from "./pages/app.error.component";
import { AppAccessdeniedComponent } from "./pages/app.accessdenied.component";
import { AppNotfoundComponent } from "./pages/app.notfound.component";
import { AppLoginComponent } from "./pages/app.login.component";
import { AppTimelineDemoComponent } from "./pages/app.timelinedemo.component";
import { RegistrationComponent } from "./views/registration/app.registration.component";
import { AdminDashboardComponent } from "./views/adminDashboard/adminDashboard.crud.component";
import { RegistrationFrComponent } from "./views/registrationFr/app.registrationFr.component";
import { RegistrationRuComponent } from "./views/registrationRu/app.registrationRu.component";

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                // {
                //     path: "",
                //     component: AppMainComponent,
                //     children: [],
                // },
                //{ path: "error", component: AppErrorComponent },
                //{ path: "accessdenied", component: AppAccessdeniedComponent },
                //{ path: "404", component: AppNotfoundComponent },
                { path: "login", component: AppLoginComponent },
                {
                    path: "admin-dashboard/:id",
                    component: AdminDashboardComponent,
                },
                { path: "registration", component: RegistrationComponent },
                { path: "registration/fr", component: RegistrationFrComponent },
                { path: "registration/ru", component: RegistrationRuComponent },
                { path: "**", redirectTo: "/registration" },
            ],
            { scrollPositionRestoration: "enabled" }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
