const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface RequestOptions extends RequestInit {
  token?: string;
}

export const apiClient = async (endpoint: string, options: RequestOptions = {}): Promise<any> => {
  const { token, ...fetchOptions } = options;
  const headers = new Headers(fetchOptions.headers);

  if (token) {
    headers.set('Authorization', `Bearer ${token}`);
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...fetchOptions,
    headers,
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'Une erreur est survenue lors de la requête API');
  }

  return response.json();
};