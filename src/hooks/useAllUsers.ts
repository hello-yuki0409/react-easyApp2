/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import type { User } from "../types/api/user";
import axios from "axios";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();

  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);

  // 他のコンポーネントで使う際に再生成されないようにuseCallback
  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() =>
        showMessage({ title: "ユーザー取得に失敗しました", status: "error" })
      )
      .finally(() => setLoading(false));
  }, []);

  return { getUsers, loading, users };
};
