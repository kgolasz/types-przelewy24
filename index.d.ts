declare const Przelewy24PayWithGoogle: {
  config(
    errorCallback: () => void,
    exceptionCallback: () => void,
    requestFailedCallback: () => void,
    completePaymentCallback: () => void
  ): void
  charge(): void
  payment(): void
}

declare const Przelewy24ApplePay: {
  config(
    errorCallback: () => void,
    exceptionCallback: () => void,
    requestFailedCallback: () => void,
    completePaymentCallback: () => void
  ): void
  charge(): void
  payment(): void
}

declare const Przelewy24TransactionConfiguration: {
  transactionToken: string;
  baseUrl: string;
  errorAction: {
    action: string;
    html: HTMLElement
  }
  hasError: boolean;
}
