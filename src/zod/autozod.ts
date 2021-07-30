export interface Enemy {
    name: string;
    powers: string[];
    inPrison: boolean;
}
export interface Superman {
    name: "superman" | "clark kent" | "kal-l";
    enemies: Record<string, Enemy>;
    age: number;
    underKryptonite?: boolean;
}
export interface Villain {
    name: string;
    powers: string[];
    friends: Villain[];
}
export interface EvilPlan {
    owner: Villain;
    description: string;
    details: EvilPlanDetails;
}
export interface EvilPlanDetails {
    parent: EvilPlan;
    steps: string[];
}
export declare type Story = [subject: string, problems: string[]];
export declare type KrytonResponse = Promise<boolean>;
export declare type KillSuperman = (withKryptonite: boolean, method: string) => Promise<boolean>;
export interface WithDefaults {
    /**
     * @default 42
     */
    theAnswerToTheUltimateQuestionOfLife: number;
    /**
     * @default false
     */
    isVulnerable: boolean;
    /**
     * @default clark
     */
    name: "clark" | "superman" | "kal-l";
    /**
     * @default The Answer to the Ultimate Question of Life
     */
    theMeaningOf42: string;
    /**
     * @default ""
     */
    emptyString?: string;
    /**
     * @default "true"
     */
    booleanAsString: string;
}
interface NonExported {
    name: string;
}
export interface Exported {
    a: NonExported;
    b: string;
}
export {};
