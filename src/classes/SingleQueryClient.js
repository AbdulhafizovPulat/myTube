import { QueryClient } from "@tanstack/react-query";
export default class SingleQueryClient {
  static #queryClient;

  static getInstance() {
    if (!this.#queryClient) {
      this.#queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 2,
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      });
    }

    return this.#queryClient;
  }

  static destroy() {
    this.#queryClient = null;
  }

  constructor() {
    throw new Error("This class cannot be instantiated");
  }
}
