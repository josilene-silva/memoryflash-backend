interface IBaseEntity<T = string> {
  id: T;
  createdAt: Date;
  updatedAt: Date;
  merge(props: Partial<this> | any): this;
}

export { IBaseEntity };
