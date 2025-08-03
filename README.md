# React + TypeScript + Vite
10でログインすると管理者ユーザーとなります。

以下のエラーは後ほど解消する予定です。
```tsx
export const LoginUserContext = createContext<LoginUserContextType>(
  {} as LoginUserContextType
);
```
Context定義とProviderコンポーネントを分けるのが良さそう。
