"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
    children: React.ReactNode;
};

const QueryProvider = ({ children }: Props) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            {/* <ReactQueryDevtools initialIsOpen={true} /> */}
        </QueryClientProvider>
    );
};

export default QueryProvider;
