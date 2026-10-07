import { Component, ViewChild } from '@angular/core';
import { PdfViewerModule, LinkAnnotationService, BookmarkViewService,
         MagnificationService, ThumbnailViewService, ToolbarService,
         NavigationService, TextSearchService, TextSelectionService,
         PrintService, FormDesignerService, FormFieldsService,
         AnnotationService, PageOrganizerService, PdfViewerComponent } from '@syncfusion/ej2-angular-pdfviewer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PdfViewerModule],
  providers: [ LinkAnnotationService, BookmarkViewService, MagnificationService,
               ThumbnailViewService, ToolbarService, NavigationService,
               TextSearchService, TextSelectionService, PrintService,
               FormDesignerService, FormFieldsService, AnnotationService, PageOrganizerService],
  template: `
   <div style="margin-top: 100px">
      <ejs-pdfviewer
        #pdfViewer
        id="pdfViewer"
        [documentPath]="documentPath"
        [resourceUrl]="resourcesUrl"
        (addSignature)="signatureAdded($event)"
        (removeSignature)="signatureRemoved($event)"
        [toolbarSettings]="{ toolbarItems: toolbarItems }"
        style="height:640px; display:block">
      </ejs-pdfviewer>
    </div>
  `
})
export class App {
  @ViewChild('pdfViewer') public pdfviewer!: PdfViewerComponent;
  public documentPath: string = window.location.origin + '/assets/form-designer.pdf';
  public resourcesUrl: string = 'https://cdn.syncfusion.com/ej2/35.1.39/dist/ej2-pdfviewer-lib';
   public toolbarItems: any[] = [
    "UndoRedoTool",
    "PageNavigationTool",
    "MagnificationTool",
    "PanTool",
    "SelectionTool",
    "CommentTool",
    "AnnotationEditTool",
    "SearchOption"
  ];
  
  public signatureAdded(args: any): void {
    const value = args.id;
    const result = value.replace("_content", "");
    const signLabel = document.getElementById(result);
    const child = signLabel?.parentElement?.children[1] as HTMLElement;
    if (child) {
      child.style.display = "none";
    }
  }
  public signatureRemoved(args: any): void {
    this.pdfviewer.formFieldCollections.forEach((field: any) => {
        const isEmpty =
            field.value === '' ||
            field.value === null ||
            field.value === undefined;
        const value = field.id;
        const signLabel = document.getElementById(value);
        const child = signLabel?.parentElement?.children[1] as HTMLElement;
        if (isEmpty && child!.style.display == 'none') {
          child.style.display = "block";
        }
    });
  }
}