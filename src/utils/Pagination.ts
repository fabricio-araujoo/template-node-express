export interface IPaginationData {
  page: number;
  limit: number;
  totalPages: number;
  totalItems: number;
}

export class Pagination {
  private page: number;
  private _limit: number;

  constructor(page: number = 1, _limit: number = 10) {
    this.page = page;
    this._limit = _limit;
  }

  get skip(): number {
    return (this.page - 1) * this._limit;
  }

  get limit(): number {
    return this._limit;
  }

  public getPaginationData(totalItems: number): IPaginationData {
    const totalPages = Math.ceil(totalItems / this._limit);

    return {
      page: this.page,
      limit: this._limit,
      totalPages,
      totalItems,
    };
  }
}
