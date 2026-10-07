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
        [enableFormDesigner]="false"
        style="height:640px; display:block">
      </ejs-pdfviewer>
    </div>
  `
})
export class App {
  @ViewChild('pdfViewer') public pdfviewer!: PdfViewerComponent;
  public documentPath: string =
    'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf';
  public resourcesUrl: string =
    'https://cdn.syncfusion.com/ej2/35.1.39/dist/ej2-pdfviewer-lib';
  
  public signatureAdded(args: any): void {
    const value = args.id;
    const result = "signIcon" + value.replace("pdfViewerinput", "");
    const signLabel = document.getElementById(result);
    signLabel!.style.display = "none";
  }
  public signatureRemoved(args: any): void {
    this.pdfviewer.formFieldCollections.forEach((field: any) => {
        const isEmpty =
            field.value === '' ||
            field.value === null ||
            field.value === undefined;
        const value = field.id;
        const result = "signIcon" + value.replace("pdfViewerinput", "");
        const signLabel = document.getElementById(result);
        if (isEmpty && signLabel!.style.display == 'none') {
          signLabel!.style.display = 'block';
        }
    });
}
}