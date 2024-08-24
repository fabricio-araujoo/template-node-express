export class Todo {
  id: string;
  title: string;
  completed: boolean;

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
    this.completed = false;
  }
}
