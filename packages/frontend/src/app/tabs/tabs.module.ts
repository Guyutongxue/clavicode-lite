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

import { AppRoutingModule } from '../app-routing.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { EditorComponent } from './editor/editor.component';
import { TabsComponent } from './tabs/tabs.component';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { AngularSplitModule } from 'angular-split';


@NgModule({
  declarations: [
    EditorComponent,
    TabsComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    FormsModule,
    DragDropModule,
    NzTabsModule,
    NzModalModule,
    NzButtonModule,
    NzSelectModule,
    NzDropDownModule,
    MonacoEditorModule,
  ],
  exports: [TabsComponent]
})
export class TabsModule { }
