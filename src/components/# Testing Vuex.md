[//]: https://github.com/vuejs/vue-test-utils-next/edit/master/docs/guide/advanced/vuex.md

## Testing a store when using the composition API
When using the composition API, the Vuex store is usually accessed via a useStore helper function. In Javascript projects the built-in `useStore()` function should be used (see example here: https://next.vuex.vuejs.org/guide/composition-api.html ). In TypeScript project a custom `useStore`-function that uses an unique injection key is recommended for type safety (see example here: https://next.vuex.vuejs.org/guide/typescript-support.html#typing-usestore-composition-function).
Those two approaches require slightly different approaches when trying to unit test a component.

### Testing components that use built-in useStore-function without injection keys
Without an injection key, the mock store can just be injected into the component during testing via the provide mounting-option. The name of the injected store must be the same as the one in the component. Instead of creating the store on the fly, it can also be imported from a file and therefore be shared between test components.

Example:
```ts
const wrapper = mount(App, {
  global: {
      provide: {
        store: createStore({
          .....
        }),
      },
    },
})
```

### Testing components that use an injection key for the store
When using an injection key for type safety the previous approach won't work as the provided key for the store won't match the unique store key that is used for the real store throughout the application. This key is a JavaScript symbol and needs to be imported from the real store config. Recreating the symbol on the fly with the same parameter won't work since the symbol object always creates a new and unique symbol.
As before the mock store can also be imported from a file to aid with code reusability.

Example:
```ts
import { key } from 'store';

const wrapper = mount(App, {
  global: {
      provide: {
        [key as symbol]: createStore({
          .....
        }),
      },
    },
})
```
