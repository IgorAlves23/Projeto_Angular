export interface IContatos {
  id: number | null,
  nome: string,
  tipoContato: string,
  contato: string,
  pessoa: { id: number | null };
}
