import { ReactNode } from 'react';
interface ErrorContextType {
    errors: Record<string, string>;
    setErrors: (errors: Record<string, string>) => void;
    clearErrors: () => void;
}
export declare const DecisionTableErrorProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const useDecisionTableErrors: () => ErrorContextType;
export {};
//# sourceMappingURL=ErrorContext.d.ts.map