import { Component, ViewChild } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { MatTableDataSource } from '@angular/material/table';
import { ICategory } from '../../interfaces/ICategory';
import { MatPaginator } from '@angular/material/paginator';
import { FormService } from '../../services/form.service';
import { NotificationService } from '../../services/notification.service';
import { IColumn } from '../../interfaces/IColumn';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrl: './category-table.component.scss',
})
export class CategoryTableComponent {
  // @ViewChild('paginator') paginator: MatPaginator;

  // displayedColumnsCategory = [
  //   '_id',
  //   'imgSrc',
  //   'title',
  //   'description',
  //   'delete',
  //   'update',
  // ];

  // dataSourceCategory: MatTableDataSource<ICategory>;

  // constructor(
  //   private categoryService: CategoryService,
  //   public formService: FormService,
  //   public notification: NotificationService
  // ) {
  //   // categoryService
  //   //   .add({ title: 'dfdf', description: 'dffddf', imgSrc: 'dfdfdfdf' })
  //   //   .subscribe((d) => {
  //   //     console.log(d);
  //   //   });
  // }

  // ngOnInit() {
  //   this.categoryService.getAll().subscribe((data) => {
  //     this.dataSourceCategory = new MatTableDataSource<ICategory>(data);
  //     this.dataSourceCategory.paginator = this.paginator;
  //     this.dataSourceCategory.paginator._intl.itemsPerPageLabel =
  //       'Категорий на странице: ';
  //   });
  // }

  visible: boolean = false;
  current: ICategory;
  categories!: ICategory[];
  cols!: IColumn[];

  constructor(
    private categoryService: CategoryService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService,
    public formService: FormService
  ) {}

  private getCategory(category: ICategory) {
    const findCategory = this.categoryService.setCategory(category);

    return findCategory;
  }

  async deleteCategory(id: String) {
    await this.categoryService.deleteById(id).subscribe((data) => {
      if (data.ok) {
        this.ngOnInit();
      }
    });
  }

  updateCategory(category: ICategory) {
    this.formService.setCategoryId(category._id as string);

    this.getCategory(category);

    this.formService.invokeUpdateCategory();
  }

  addCategory() {
    const resetCategory = null;
    this.categoryService.setCategory(resetCategory);
    this.formService.invokeAddCategory();
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe((data) => {
      this.categories = data;
    });

    this.cols = [
      { field: '_id', header: 'Код' },
      { field: 'imgSrc', header: 'Фото' },
      { field: 'title', header: 'Название' },
      { field: 'description', header: 'Описание' },
      { field: '', header: '' },
      { field: '', header: '' },
      { field: '', header: '' },
    ];
  }

  show(category: ICategory) {
    this.current = category;
    this.visible = true;
  }

  confirm(event: Event, id: String) {
    this.confirmationService.confirm({
      key: 'popup4',
      target: event.target as EventTarget,
      message: 'Вы точно хотите удалить запись?',
      icon: 'pi pi-info-circle',
      acceptButtonStyleClass: 'p-button-danger p-button-sm',
      acceptIcon: 'pi pi-check',
      rejectIcon: 'pi pi-times',
      acceptLabel: ' ',
      rejectLabel: ' ',
      accept: () => {
        setTimeout(() => {
          this.deleteCategory(id);
        }, 2100);
        this.messageService.add({
          severity: 'info',
          summary: 'Запись удалена!',
          detail: 'Запись удалена успешно!',
        });
      },
      reject: () => {
        this.messageService.add({
          severity: 'warn',
          summary: 'Удаление отменено!',
          detail: 'Запись не удалена!',
        });
      },
    });
  }
}
