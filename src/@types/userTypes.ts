export type UserGender = 'masculino' | 'feminino' | 'outro';
export type Email = string & { readonly brand: unique symbol };
export type DateOfBirth = string & { readonly brand: unique symbol };
export type Telephone = string & { readonly brand: unique symbol };
export type Specialty = 'Eletricista' | 'Pedreiro' | 'Outro';
export type Document = string & { readonly brand: unique symbol };
export type CEP = string & { readonly brand: unique symbol };
export type ImageProfile = File;