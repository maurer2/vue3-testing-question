export type Props = {
  title: string,
  initialCounterValue?: number
}

export type Emits = {
  // (event: Event['type'], payload: number | string): void
  (event: 'update-counter', payload: number): void
}
