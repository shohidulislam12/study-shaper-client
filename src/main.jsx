import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {

  RouterProvider,
} from "react-router-dom";
import router from './components/Routes.jsx';
import AuthProvider from './components/Authprovider/AuthProvider.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>

<AuthProvider>
<QueryClientProvider client={queryClient}>
<RouterProvider router={router} />
</QueryClientProvider>
 </AuthProvider>
  </StrictMode>,
)

