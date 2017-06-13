export class Item {

  public title: string;
  public completed: boolean;

  constructor(title: string) {
    this.title     = title;
    this.completed = false;
  }
}