[//]: https://github.com/vuejs/vue-test-utils-next/edit/master/docs/guide/advanced/vuex.md

## Testing a store when using the composition API
When using the composition API, the Vuex store is usually accessed via a `useStore`-helper function. In Javascript projects the built-in `useStore` function should be used. More about it here: https://next.vuex.vuejs.org/guide/composition-api.html.
In TypeScript projects the `useStore`-function can be used with an optional and unique injection key to get a properly typed store. To avoid repeating the key parameter passing whenever `useStore` is used, it is recommended to extract that logic into a helper function and reuse that function instead of the default `useStore`-function. More about it here: https://next.vuex.vuejs.org/guide/typescript-support.html#typing-usestore-composition-function.
The approach to provide a store for a unit test depends on the way the `useStore`-function is used in the component.

### Testing components that utilize `useStore` without an injection keys
Without an injection key, the store data can just be injected into the component on mount via the provide mounting-option. The name of the injected store must be the same as the one in the component, e.g. "store". Instead of creating the store on the fly, it can also be imported from a file and therefore be shared between unit tests.

#### Example for providing the unkeyed `useStore`
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

### Testing components that utilize `useStore` with an injection keys
When using the store with an injection key the previous approach won't work. The store instance won't be returned from `useStore`. In oder to access the correct store the correct store identifier needs to be provided on mount.
It needs to be the exact key that is passed to `useStore` in the `setup`-function of the component or to `useStore` within the custom helper-function. Since JavScript-symbols are unique and can't be recreated, it is best to export the key from the real store.
As before the mock store can also be imported from a file to improve code reusability.

#### Example for providing the keyed `useStore`
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
