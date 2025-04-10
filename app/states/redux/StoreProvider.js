'use client'

import { Provider } from 'react-redux'
import { persistor, store } from './store'
import { PersistGate } from 'redux-persist/integration/react'

export default function StoreProvider({ children }) {
  return (
    <Provider store={store}>
      {/* Redux: redux-persist 적용 */}
      {/* loading: 리덕스와 스토리지가 동기화 될 동안 표시될 컴포넌트를 지정 ex)loading={<Logo/>}*/}
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}