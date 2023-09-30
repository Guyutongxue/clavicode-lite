// Copyright (C) 2021 Clavicode Team
// 
// This file is part of clavicode-frontend.
// 
// clavicode-frontend is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// clavicode-frontend is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with clavicode-frontend.  If not, see <http://www.gnu.org/licenses/>.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MonacoEditorModule, MONACO_PATH } from '@materia-ui/ngx-monaco-editor';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';


import { AngularSplitModule } from 'angular-split';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainViewComponent } from './main-view/main-view.component';
import { EmptyPageComponent } from './empty-page/empty-page.component';
import { XtermComponent } from './execute-dialog/xterm/xterm.component';
import { ExecuteDialogComponent } from './execute-dialog/execute-dialog.component';
import { SidebarModule } from './sidebar/sidebar.module';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { EditorComponent } from './tabs/editor/editor.component';
import { TabsComponent } from './tabs/tabs/tabs.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainViewComponent,
    EmptyPageComponent,
    XtermComponent,
    ExecuteDialogComponent,
    EditorComponent,
    TabsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularSplitModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MonacoEditorModule,
    NzFormModule,
    NzIconModule,
    NzButtonModule,
    NzTabsModule,
    NzModalModule,
    NzInputModule,
    NzCheckboxModule,
    NzDropDownModule,
    NzSelectModule,
    NzNotificationModule,
    SidebarModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: MONACO_PATH, useValue: 'https://cdn.jsdelivr.net/npm/monaco-editor-core@0.31.1/min/vs'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
