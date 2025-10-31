export interface Ticket {  
  // Dto derived (may not need all)
  ProjectNumber: string;
  ProjectName: string;
  Id: string;
  Number: string;
  Name: string;
  Type: string;
  // Status: string;
  // Step: string;
  // StepType: string;
  // Owner?: Person;
  // Assignees?: Person[];
  // ProjectManager?: Person;
  // Instructions: string;
  MasterNote?: string;
  
  // Locally set for View Model
  IsPunchedAs: boolean;
  AsLineItemNumber: string;
  LaborItemId: string;
  LaborItemName: string;

}


