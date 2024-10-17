import { useState, useEffect } from 'react';
import { getAccount } from '../lib/api/accountApi';
import { Account } from '../types/account';

export const useAccount = (accountId?: string) => {
  const [account, setAccount] = useState<Account | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!accountId) return;

    const fetchAccount = async () => {
      try {
        const data = await getAccount(accountId);
        setAccount(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAccount();
  }, [accountId]);

  return { account, isLoading, error };
};