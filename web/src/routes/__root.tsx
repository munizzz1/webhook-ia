import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRootRoute, Outlet } from "@tanstack/react-router";

import { Sidebar } from "../components/sidebar";

const queryClient = new QueryClient();

const RootLayout = () => (
  <QueryClientProvider client={queryClient}>
    <div className="h-screen bg-zinc-900">
      <PanelGroup direction="horizontal">
        <Panel defaultSize={28} minSize={15} maxSize={40}>
          <Sidebar />
        </Panel>

        <PanelResizeHandle className="w-px bg-zinc-700 hover:bg-zinc-600 transition-colors duration-150" />

        <Panel defaultSize={88} minSize={68}>
          <Outlet />
          <TanStackRouterDevtools />
        </Panel>
      </PanelGroup>
    </div>
  </QueryClientProvider>
);

export const Route = createRootRoute({ component: RootLayout });
