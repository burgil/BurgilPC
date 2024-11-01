declare interface Window {
    electronAPI: {
        IPC: (key: string, msg: All | ((args: All[]) => void)) => void;
        SCREEN: () => { x: number; y: number; width: number; height: number; }
    };
    plugins: PluginMarketplace;
}

declare type All = string | number | boolean | object | undefined | null;

type AIPlugin = {
    plugin: string;
    name: string;
    description: string;
    version: string;
    released: string;
    updated: string;
    author: string;
    license: string;
    url: string;
    downloads: number;
    image: string;
    price: string;
    status: string;
    category: string;
    guide: string;
    depends: string[];
    commands: string[];
};

type PluginMarketplace = {
    marketplace: AIPlugin[];
};
