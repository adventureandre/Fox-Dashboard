import { prisma } from '@/lib/prisma'

export async function seedCategories() {
  const categories = [
    {
      code: 1,
      level: 1,
      description: 'ENTRADAS',
      parent_id: null,
      type: 'receita',
    },
    {
      code: 101,
      level: 3,
      description: 'ENTRADAS OPERACIONAIS',
      parent_id: 1,
      type: 'receita',
    },
    {
      code: 1011,
      level: 4,
      description: 'VENDA DE SEMENTES',
      parent_id: 101,
      type: 'receita',
    },
    {
      code: 101101,
      level: 6,
      description: 'SEMENTE DE SOJA',
      parent_id: 1011,
      type: 'receita',
    },
    {
      code: 101102,
      level: 6,
      description: 'SEMENTE DE MILHO',
      parent_id: 1011,
      type: 'receita',
    },
    {
      code: 101103,
      level: 6,
      description: 'SEMENTE DE SORGO',
      parent_id: 1011,
      type: 'receita',
    },
    {
      code: 101104,
      level: 6,
      description: 'SEMENTE DE ARROZ',
      parent_id: 1011,
      type: 'receita',
    },
    {
      code: 101105,
      level: 6,
      description: 'GRAO DE MILHETO',
      parent_id: 1011,
      type: 'receita',
    },
    {
      code: 1012,
      level: 4,
      description: 'VENDA DE COMMODITIES',
      parent_id: 101,
      type: 'receita',
    },
    {
      code: 101201,
      level: 6,
      description: 'SOJA',
      parent_id: 1012,
      type: 'receita',
    },
    {
      code: 101202,
      level: 6,
      description: 'MILHO',
      parent_id: 1012,
      type: 'receita',
    },
    {
      code: 101207,
      level: 6,
      description: 'FEIJAO',
      parent_id: 1012,
      type: 'receita',
    },
    {
      code: 101208,
      level: 6,
      description: 'SORGO',
      parent_id: 1012,
      type: 'receita',
    },
    {
      code: 101209,
      level: 6,
      description: 'MILHETO',
      parent_id: 1012,
      type: 'receita',
    },
    {
      code: 101293,
      level: 6,
      description: 'SENAR RETIDO',
      parent_id: 1012,
      type: 'receita',
    },
    {
      code: 101294,
      level: 6,
      description: 'FUNRURAL RETIDO',
      parent_id: 1012,
      type: 'receita',
    },
    {
      code: 101295,
      level: 6,
      description: 'FUNDEINFRA RETIDO',
      parent_id: 1012,
      type: 'receita',
    },
    {
      code: 101299,
      level: 6,
      description: 'FETHAB RETIDO',
      parent_id: 1012,
      type: 'receita',
    },
    {
      code: 1014,
      level: 4,
      description: 'PRESTACAO DE SERVICO',
      parent_id: 101,
      type: 'receita',
    },
    {
      code: 101401,
      level: 6,
      description: 'BENEFICIAMENTO',
      parent_id: 1014,
      type: 'receita',
    },
    {
      code: 101402,
      level: 6,
      description: 'ARMAZENAGEM',
      parent_id: 1014,
      type: 'receita',
    },
    {
      code: 101403,
      level: 6,
      description: 'TRANSPORTE',
      parent_id: 1014,
      type: 'receita',
    },
    {
      code: 101404,
      level: 6,
      description: 'OUTROS SERVICOS',
      parent_id: 1014,
      type: 'receita',
    },
    {
      code: 101405,
      level: 6,
      description: 'PRESTACAO DE SERVICO COM IR + ISS + PCC',
      parent_id: 1014,
      type: 'receita',
    },
    {
      code: 1016,
      level: 4,
      description: 'OUTRAS ENTRADAS OPERACIONAIS',
      parent_id: 101,
      type: 'receita',
    },
    {
      code: 101601,
      level: 6,
      description: 'VENDA DE SUCATA',
      parent_id: 1016,
      type: 'receita',
    },
    {
      code: 101602,
      level: 6,
      description: 'VENDA DE IMOBILIZADO',
      parent_id: 1016,
      type: 'receita',
    },
    {
      code: 101603,
      level: 6,
      description: 'SINISTRO IMOBILIZADO',
      parent_id: 1016,
      type: 'receita',
    },
    {
      code: 101604,
      level: 6,
      description: 'OUTRAS ENTRADAS OPERACIONAIS',
      parent_id: 1016,
      type: 'receita',
    },
    {
      code: 101605,
      level: 6,
      description: 'ADIANTAMENTO CLIENTES',
      parent_id: 1016,
      type: 'receita',
    },
    {
      code: 101606,
      level: 6,
      description: 'CLIENTE INTERCOMPANY',
      parent_id: 1016,
      type: 'receita',
    },
    {
      code: 101607,
      level: 6,
      description: 'ADIANTAMENTO INTERCOMPANY',
      parent_id: 1016,
      type: 'receita',
    },
    {
      code: 101608,
      level: 6,
      description: 'VENDA DE RESIDUOS',
      parent_id: 1016,
      type: 'receita',
    },
    {
      code: 101609,
      level: 6,
      description: 'EMPRESTIMO A RECEBER - PARTES RELACIONADAS',
      parent_id: 1016,
      type: 'receita',
    },
    {
      code: 101612,
      level: 6,
      description: 'EMPRESTIMOS A RECEBER - PESSOAS LIGADAS',
      parent_id: 1016,
      type: 'receita',
    },
    {
      code: 101613,
      level: 6,
      description: 'ARRENDAMENTOS A RECEBER',
      parent_id: 1016,
      type: 'receita',
    },
    {
      code: 102,
      level: 3,
      description: 'ENTRADAS FINANCEIRAS',
      parent_id: 1,
      type: 'receita',
    },
    {
      code: 1021,
      level: 4,
      description: 'RECEITA FINANCEIRA',
      parent_id: 102,
      type: 'receita',
    },
    {
      code: 102101,
      level: 6,
      description: 'RECEBIMENTO DE EMPRESTIMOS CON',
      parent_id: 1021,
      type: 'receita',
    },
    {
      code: 102102,
      level: 6,
      description: 'JUROS E MULTAS RECEBIDOS DE CL',
      parent_id: 1021,
      type: 'receita',
    },
    {
      code: 102103,
      level: 6,
      description: 'APORTE, EMPRESTIMOS E RECURSOS',
      parent_id: 1021,
      type: 'receita',
    },
    {
      code: 102104,
      level: 6,
      description: 'INSTRUMENTOS FINANCEIROS ATIVO',
      parent_id: 1021,
      type: 'receita',
    },
    {
      code: 102105,
      level: 6,
      description: 'VARIACAO CAMBIAL ATIVA',
      parent_id: 1021,
      type: 'receita',
    },
    {
      code: 1022,
      level: 4,
      description: 'OUTRAS ENTRADAS FINANCEIRAS',
      parent_id: 102,
      type: 'receita',
    },
    {
      code: 102201,
      level: 6,
      description: 'OUTRAS ENTRADAS FINANCEIRAS',
      parent_id: 1022,
      type: 'receita',
    },
    {
      code: 102202,
      level: 6,
      description: 'ALUGEIS RECEBIDOS',
      parent_id: 1022,
      type: 'receita',
    },
    {
      code: 102203,
      level: 6,
      description: 'DEPOSITOS JUDICIAIS',
      parent_id: 1022,
      type: 'receita',
    },
    {
      code: 102204,
      level: 6,
      description: 'CREDITO CONSORCIO',
      parent_id: 1022,
      type: 'receita',
    },
    {
      code: 102205,
      level: 6,
      description: 'RESTITUICAO DE CREDITOS FEDERAIS',
      parent_id: 1022,
      type: 'receita',
    },
    {
      code: 102206,
      level: 6,
      description: 'CREDITO SEGURO',
      parent_id: 1022,
      type: 'receita',
    },
    {
      code: 102207,
      level: 6,
      description: 'DEVOLUCAO PESAGEM - NCC',
      parent_id: 1022,
      type: 'receita',
    },
    {
      code: 102208,
      level: 6,
      description: 'SEGURO PRESTAMISTA S/ EMPR',
      parent_id: 1022,
      type: 'receita',
    },
    {
      code: 102209,
      level: 6,
      description: 'RECEB ALUGUEIS VEICULOS ENTRE PARTES RELACIONADAS',
      parent_id: 1022,
      type: 'receita',
    },
    {
      code: 109,
      level: 3,
      description: 'ENTRADA DE INVESTIMENTOS',
      parent_id: 1,
      type: 'receita',
    },
    {
      code: 1091,
      level: 4,
      description: 'ENTRADA DE INVESTIMENTOS',
      parent_id: 109,
      type: 'receita',
    },
    {
      code: 109101,
      level: 6,
      description: 'RENDIMENTO S/APLICACOES',
      parent_id: 1091,
      type: 'receita',
    },
    {
      code: 109102,
      level: 6,
      description: 'RESGATE DE APLICACOES',
      parent_id: 1091,
      type: 'receita',
    },
    {
      code: 109103,
      level: 6,
      description: 'VENDA DE ACOES/COTAS DE CAPITA',
      parent_id: 1091,
      type: 'receita',
    },
    {
      code: 109104,
      level: 6,
      description: 'DIVIDENDOS RECEBIDOS',
      parent_id: 1091,
      type: 'receita',
    },
    {
      code: 109105,
      level: 6,
      description: 'VENDA DE IMOBILIZADO',
      parent_id: 1091,
      type: 'receita',
    },
    {
      code: 109106,
      level: 6,
      description: 'TITULOS DE CAPITALIZACAO',
      parent_id: 1091,
      type: 'receita',
    },
    {
      code: 109107,
      level: 6,
      description: 'PREVIDENCIA PRIVADA',
      parent_id: 1091,
      type: 'receita',
    },
    {
      code: 110,
      level: 3,
      description: 'CONTRATOS BANCARIOS',
      parent_id: 1,
      type: 'receita',
    },
    {
      code: 1101,
      level: 4,
      description: 'MOVIMENTACOES BANCARIAS',
      parent_id: 110,
      type: 'receita',
    },
    {
      code: 110101,
      level: 6,
      description: 'CAPTACAO DE EMPRESTIMOS',
      parent_id: 1101,
      type: 'receita',
    },
    {
      code: 110102,
      level: 6,
      description: 'CAPTACAO DE FINANCIAMENTO',
      parent_id: 1101,
      type: 'receita',
    },
    {
      code: 2,
      level: 1,
      description: 'SAIDAS',
      parent_id: null,
      type: 'despesa',
    },
    {
      code: 201,
      level: 3,
      description: 'SAIDAS OPERACIONAIS',
      parent_id: 2,
      type: 'despesa',
    },
    {
      code: 2011,
      level: 4,
      description: 'PESSOAS',
      parent_id: 201,
      type: 'despesa',
    },
    {
      code: 201101,
      level: 6,
      description: 'PRO-LABORE',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201102,
      level: 6,
      description: 'GASTOS C/SERVICOS PROFISSIONAIS',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201103,
      level: 6,
      description: 'SALARIO',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201104,
      level: 6,
      description: 'FERIAS',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201105,
      level: 6,
      description: '1 PARCELA 13',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201106,
      level: 6,
      description: '2 PARCELA 13',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201107,
      level: 6,
      description: 'PENSAO ALIMENTICIA',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201108,
      level: 6,
      description: 'RESCISAO A PAGAR',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201109,
      level: 6,
      description: 'ADIANTAMENTO SALARIAL',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201110,
      level: 6,
      description: 'PLANO DE SAUDE',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201111,
      level: 6,
      description: 'LANCHES',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201112,
      level: 6,
      description: 'BENEFICIOS, TREINAMENTO',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201113,
      level: 6,
      description: 'PLR A PAGAR',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201114,
      level: 6,
      description: 'INDENIZACAO PROCESSOS TRABALHISTAS',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201115,
      level: 6,
      description: 'INSS S/  FOLHA A RECOLHER',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201116,
      level: 6,
      description: 'IRRF S/ FOLHA A RECOLHER',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201117,
      level: 6,
      description: 'FGTS',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201118,
      level: 6,
      description: 'GRRF',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201119,
      level: 6,
      description: 'SALARIO EDUCACAO (DEP JUDICIAL)',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201120,
      level: 6,
      description: 'GRATIFICACOES',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201121,
      level: 6,
      description: 'DIARIAS',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201122,
      level: 6,
      description: 'ADIANTAMENTO DE VIAGEM',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201123,
      level: 6,
      description: 'ADIANTAMENTO DE FERIAS',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201124,
      level: 6,
      description: 'AJUDA DE CUSTO TRANSPORTE',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201125,
      level: 6,
      description: 'CONTRIBUICAO SINDICAL A RECOLHER',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201126,
      level: 6,
      description: 'DEPOSITO JUDICIAL TRABALHISTA',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 201127,
      level: 6,
      description: '13 PRO LABORE',
      parent_id: 2011,
      type: 'despesa',
    },
    {
      code: 2012,
      level: 4,
      description: 'FORNECEDORES',
      parent_id: 201,
      type: 'despesa',
    },
    {
      code: 201201,
      level: 6,
      description: 'FORNECEDORES DE INSUMOS',
      parent_id: 2012,
      type: 'despesa',
    },
    {
      code: 201206,
      level: 6,
      description: 'FORNECEDORES PJ DIVERSOS',
      parent_id: 2012,
      type: 'despesa',
    },
    {
      code: 201209,
      level: 6,
      description: 'FORNECEDOR INTERCOMPANY',
      parent_id: 2012,
      type: 'despesa',
    },
    {
      code: 2013,
      level: 4,
      description: 'PRESTACAO DE SERVICOS',
      parent_id: 201,
      type: 'despesa',
    },
    {
      code: 201301,
      level: 6,
      description: 'PRESTACAO DE SERVICO DE PULVERIZACAO',
      parent_id: 2013,
      type: 'despesa',
    },
    {
      code: 201302,
      level: 6,
      description: 'PRESTACAO DE SERVICO DE COLHEITA',
      parent_id: 2013,
      type: 'despesa',
    },
    {
      code: 201303,
      level: 6,
      description: 'PRESTACAO DE SERVICO DE TRANSPORTE',
      parent_id: 2013,
      type: 'despesa',
    },
    {
      code: 201304,
      level: 6,
      description: 'FRETE INTERNO P/ ARMAZENAGEM',
      parent_id: 2013,
      type: 'despesa',
    },
    {
      code: 201305,
      level: 6,
      description: 'OUTROS SERVICOS SEM RETENCAO',
      parent_id: 2013,
      type: 'despesa',
    },
    {
      code: 201306,
      level: 6,
      description: 'OUTROS SERVICOS C/ IR',
      parent_id: 2013,
      type: 'despesa',
    },
    {
      code: 201307,
      level: 6,
      description: 'OUTROS SERVICOS C/ IR+PCC',
      parent_id: 2013,
      type: 'despesa',
    },
    {
      code: 201308,
      level: 6,
      description: 'OUTROS SERVICOS C/ IR+PCC+ISS',
      parent_id: 2013,
      type: 'despesa',
    },
    {
      code: 201309,
      level: 6,
      description: 'OUTROS SERVICOS C/ PCC+ISS',
      parent_id: 2013,
      type: 'despesa',
    },
    {
      code: 201310,
      level: 6,
      description: 'OUTROS SERVICOS C/ PCC',
      parent_id: 2013,
      type: 'despesa',
    },
    {
      code: 201311,
      level: 6,
      description: 'OUTROS SERVICOS C/ ISS',
      parent_id: 2013,
      type: 'despesa',
    },
    {
      code: 201312,
      level: 6,
      description: 'OUTROS SERVICOS C/ IR  E INSS',
      parent_id: 2013,
      type: 'despesa',
    },
    {
      code: 201313,
      level: 6,
      description: 'OUTROS SERVICOS C/ INSS',
      parent_id: 2013,
      type: 'despesa',
    },
    {
      code: 201314,
      level: 6,
      description: 'OUTROS SERVICOS COM PCC E INSS',
      parent_id: 2013,
      type: 'despesa',
    },
    {
      code: 201315,
      level: 6,
      description: 'OUTROS SERVICOS COM INSS E ISS',
      parent_id: 2013,
      type: 'despesa',
    },
    {
      code: 2014,
      level: 4,
      description: 'SAIDAS ESPECIFICAS',
      parent_id: 201,
      type: 'despesa',
    },
    {
      code: 201404,
      level: 6,
      description: 'ARRENDAMENTOS',
      parent_id: 2014,
      type: 'despesa',
    },
    {
      code: 2015,
      level: 4,
      description: 'SAIDAS ADMINISTRATIVAS/COMERCIAIS',
      parent_id: 201,
      type: 'despesa',
    },
    {
      code: 201501,
      level: 6,
      description: 'FRETE S/COMPRA',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201502,
      level: 6,
      description: 'FRETE S/ VENDA',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201503,
      level: 6,
      description: 'COMISSOES S/VENDA SEM IR',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201504,
      level: 6,
      description: 'MANUTENCOES',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201505,
      level: 6,
      description: 'COMUNICACAO E MARKETING',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201506,
      level: 6,
      description: 'MATERIAIS DIVERSOS',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201507,
      level: 6,
      description: 'COMBUSTIVEIS E LUBRIFICANTES',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201508,
      level: 6,
      description: 'ALUGUEIS DE VEICULOS',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201509,
      level: 6,
      description: 'SEGUROS',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201510,
      level: 6,
      description: 'CONSULTORIAS',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201511,
      level: 6,
      description: 'VIAGENS',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201512,
      level: 6,
      description: 'CONTRIBUICOES E DOACOES',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201513,
      level: 6,
      description: 'ADIANTAMENTO FORNECEDOR',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201514,
      level: 6,
      description: 'ALUGUEIS',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201515,
      level: 6,
      description: 'CONCESSIONARIAS E TELECOM',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201516,
      level: 6,
      description: 'GASTOS GERAIS',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201517,
      level: 6,
      description: 'ADIANTAMENTO INTERCOMPANY',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201518,
      level: 6,
      description: 'DIVIDENDOS ANTECIPADOS',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201519,
      level: 6,
      description: 'MULTAS DIVERSAS',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201520,
      level: 6,
      description: 'CONTRIBUICOES ASSOCIATIVAS',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201521,
      level: 6,
      description: 'PERDAS ADIANTAMENTOS A RECEBER',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201522,
      level: 6,
      description: 'ASSESSORIA ADM',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201523,
      level: 6,
      description: 'BONIFICACOES',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201524,
      level: 6,
      description: 'REGISTRO CARTORIOS',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201525,
      level: 6,
      description: 'DEPOSITO JUDICIAL CIVEL',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201526,
      level: 6,
      description: 'BLOQUEIO JUDICIAL BANCARIO',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201527,
      level: 6,
      description: 'COMISSOES S/ VENDAS COM IR',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201528,
      level: 6,
      description: 'BLOQUEIO BANCARIO S/ JUDICIAL',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 201529,
      level: 6,
      description: 'PATROCINIOS',
      parent_id: 2015,
      type: 'despesa',
    },
    {
      code: 2016,
      level: 4,
      description: 'TRIBUTOS E TAXAS',
      parent_id: 201,
      type: 'despesa',
    },
    {
      code: 201601,
      level: 6,
      description: 'ICMS',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201602,
      level: 6,
      description: 'CSLL RETENCAO',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201603,
      level: 6,
      description: 'PIS RETENCAO',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201604,
      level: 6,
      description: 'PIS APURACAO',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201605,
      level: 6,
      description: 'ISS RETENCAO',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201606,
      level: 6,
      description: 'ISS APURACAO',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201607,
      level: 6,
      description: 'COFINS RETENCAO',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201608,
      level: 6,
      description: 'COFINS APURACAO',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201609,
      level: 6,
      description: 'IRPJ',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201610,
      level: 6,
      description: 'IRPF',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201611,
      level: 6,
      description: 'IPTU',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201612,
      level: 6,
      description: 'INSS RETENCAO',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201613,
      level: 6,
      description: 'IRRF',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201614,
      level: 6,
      description: 'IPI',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201615,
      level: 6,
      description: 'FUNRURAL',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201616,
      level: 6,
      description: 'FGTS',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201617,
      level: 6,
      description: 'CFEM',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201618,
      level: 6,
      description: 'MULTAS DA OPERACAO',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201619,
      level: 6,
      description: 'TAXAS',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201620,
      level: 6,
      description: 'SENAR',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201621,
      level: 6,
      description: 'DIFAL A RECOLHER',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201622,
      level: 6,
      description: 'FETAHB',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201623,
      level: 6,
      description: 'IAGRO',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201624,
      level: 6,
      description: 'PCC A RECOLHER',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201625,
      level: 6,
      description: 'FUNDO DE DESENVOLVIMENTO A RECOLHER',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201626,
      level: 6,
      description: 'ICMS - COOPERADO',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201627,
      level: 6,
      description: 'TAXAS ESTADUAIS',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201628,
      level: 6,
      description: 'PARCELAMENTO IRPJ',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201629,
      level: 6,
      description: 'PARCELAMENTO CSLL',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201630,
      level: 6,
      description: 'PARCELAMENTO FUNRURAL',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201631,
      level: 6,
      description: 'PARCELAMENTO MAPA',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201632,
      level: 6,
      description: 'PARCELAMETO ICMS',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201633,
      level: 6,
      description: 'PARCELAMENTO PREVIDENCIARIO',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201634,
      level: 6,
      description: 'PARCELAMENTO MTE',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201635,
      level: 6,
      description: 'PARCELAMENTO IBAMA',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201636,
      level: 6,
      description: 'PARCELAMENTO SIMPLIFICADO',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201637,
      level: 6,
      description: 'FUNDERSUL',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201638,
      level: 6,
      description: 'FUNDEMS',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201639,
      level: 6,
      description: 'FUNDEINFRA',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201640,
      level: 6,
      description: 'AUTO DE INFRACAO ICMS',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201641,
      level: 6,
      description: 'ICMS COOPERADO',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201642,
      level: 6,
      description: 'CSLL S/ LUCRO',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 201643,
      level: 6,
      description: 'TRIBUTOS A RECUPERAR',
      parent_id: 2016,
      type: 'despesa',
    },
    {
      code: 2018,
      level: 4,
      description: 'OUTRAS SAIDAS',
      parent_id: 201,
      type: 'despesa',
    },
    {
      code: 201801,
      level: 6,
      description: 'OUTRAS SAIDAS OPERACIONAIS',
      parent_id: 2018,
      type: 'despesa',
    },
    {
      code: 201802,
      level: 6,
      description: 'DESFAZIMENTO OP VENDA ENTREGA FUTURA',
      parent_id: 2018,
      type: 'despesa',
    },
    {
      code: 202,
      level: 3,
      description: 'SAIDAS FINANCEIRAS',
      parent_id: 2,
      type: 'despesa',
    },
    {
      code: 2021,
      level: 4,
      description: 'DESPESAS FINANCEIRAS',
      parent_id: 202,
      type: 'despesa',
    },
    {
      code: 202101,
      level: 6,
      description: 'JUROS E MULTAS DE FORNECEDORES',
      parent_id: 2021,
      type: 'despesa',
    },
    {
      code: 202102,
      level: 6,
      description: 'DESCONTOS CONCEDIDOS A CLIENTE',
      parent_id: 2021,
      type: 'despesa',
    },
    {
      code: 202103,
      level: 6,
      description: 'RETIRADA, EMPRESTIMOS DE RECUR',
      parent_id: 2021,
      type: 'despesa',
    },
    {
      code: 202104,
      level: 6,
      description: 'DIVIDENDOS OU DISTRIBUICAO DE LUCROS',
      parent_id: 2021,
      type: 'despesa',
    },
    {
      code: 202105,
      level: 6,
      description: 'IOF',
      parent_id: 2021,
      type: 'despesa',
    },
    {
      code: 202106,
      level: 6,
      description: 'PRO-LABORE  CONDOMINIO',
      parent_id: 2021,
      type: 'despesa',
    },
    {
      code: 202107,
      level: 6,
      description: 'IRRF S/APLICACAO',
      parent_id: 2021,
      type: 'despesa',
    },
    {
      code: 202108,
      level: 6,
      description: 'JUROS S/ LIMITE',
      parent_id: 2021,
      type: 'despesa',
    },
    {
      code: 202109,
      level: 6,
      description: 'VARIACAO CAMBIAL PASSIVA PAGAMENTO',
      parent_id: 2021,
      type: 'despesa',
    },
    {
      code: 2022,
      level: 4,
      description: 'OUTRAS SAIDAS FINANCEIRAS',
      parent_id: 202,
      type: 'despesa',
    },
    {
      code: 202201,
      level: 6,
      description: 'OUTRAS SAIDAS FINANCEIRAS',
      parent_id: 2022,
      type: 'despesa',
    },
    {
      code: 202202,
      level: 6,
      description: 'CONCESSAO DE EMPRESTIMOS',
      parent_id: 2022,
      type: 'despesa',
    },
    {
      code: 202203,
      level: 6,
      description: 'EMPRESTIMO A PAGAR - PARTES RELACIONADAS',
      parent_id: 2022,
      type: 'despesa',
    },
    {
      code: 202205,
      level: 6,
      description: 'CONSORCIOS',
      parent_id: 2022,
      type: 'despesa',
    },
    {
      code: 202206,
      level: 6,
      description: 'DEPOSITO CAUCAO',
      parent_id: 2022,
      type: 'despesa',
    },
    {
      code: 202207,
      level: 6,
      description: 'EMP PAGAR - PESSOAS LIGADAS',
      parent_id: 2022,
      type: 'despesa',
    },
    {
      code: 209,
      level: 3,
      description: 'SAIDA DE INVESTIMENTOS',
      parent_id: 2,
      type: 'despesa',
    },
    {
      code: 2091,
      level: 4,
      description: 'SAIDA DE INVESTIMENTOS',
      parent_id: 209,
      type: 'despesa',
    },
    {
      code: 209101,
      level: 6,
      description: 'SAIDAS P/APLICACAO',
      parent_id: 2091,
      type: 'despesa',
    },
    {
      code: 209102,
      level: 6,
      description: 'AQUISICAO DE ACOES/COTAS DE CA',
      parent_id: 2091,
      type: 'despesa',
    },
    {
      code: 209103,
      level: 6,
      description: 'AQUISICAO DE IMOBILIZADOS',
      parent_id: 2091,
      type: 'despesa',
    },
    {
      code: 209104,
      level: 6,
      description: 'TITULOS DE CAPITALIZACAO',
      parent_id: 2091,
      type: 'despesa',
    },
    {
      code: 209105,
      level: 6,
      description: 'PREVIDENCIA PRIVADA',
      parent_id: 2091,
      type: 'despesa',
    },
    {
      code: 210,
      level: 3,
      description: 'CONTRATOS BANCARIOS',
      parent_id: 2,
      type: 'despesa',
    },
    {
      code: 2102,
      level: 4,
      description: 'AMORTIZACAO DE EMPRESTIMOS E F',
      parent_id: 210,
      type: 'despesa',
    },
    {
      code: 210201,
      level: 6,
      description: 'PAGAMENTOS DE EMPRESTIMOS',
      parent_id: 2102,
      type: 'despesa',
    },
    {
      code: 210202,
      level: 6,
      description: 'PAGAMENTOS DE FINANCIAMENTO',
      parent_id: 2102,
      type: 'despesa',
    },
    {
      code: 210203,
      level: 6,
      description: 'PAGAMENTOS DE EMPRESTIMOS DE T',
      parent_id: 2102,
      type: 'despesa',
    },
    {
      code: 210204,
      level: 6,
      description: 'INSTRUMENTOS FINANCEIROS E DERIVATIVOS',
      parent_id: 2102,
      type: 'despesa',
    },
    {
      code: 2103,
      level: 4,
      description: 'JUROS S. OPERACOES FINANCEIRAS',
      parent_id: 210,
      type: 'despesa',
    },
    {
      code: 210301,
      level: 6,
      description: 'JUROS S. OPERACOES FINANCEIRAS',
      parent_id: 2103,
      type: 'despesa',
    },
    {
      code: 210302,
      level: 6,
      description: 'INSTRUMENTOS FINANCEIROS PASSIVO',
      parent_id: 2103,
      type: 'despesa',
    },
    {
      code: 3,
      level: 1,
      description: 'CONCILIACAO BANCARIA',
      parent_id: null,
      type: 'conciliacao',
    },
    {
      code: 301,
      level: 3,
      description: 'TRANSFERENCIAS',
      parent_id: 3,
      type: 'conciliacao',
    },
    {
      code: 3011,
      level: 4,
      description: 'TRANSFERENCIAS',
      parent_id: 301,
      type: 'conciliacao',
    },
    {
      code: 301101,
      level: 6,
      description: 'TRANSFERENCIAS BANCARIAS - ORI',
      parent_id: 3011,
      type: 'conciliacao',
    },
    {
      code: 301102,
      level: 6,
      description: 'TRANSFERENCIAS BANCARIAS - DES',
      parent_id: 3011,
      type: 'conciliacao',
    },
    {
      code: 301103,
      level: 6,
      description: 'TRANSFERENCIAS CAIXAS',
      parent_id: 3011,
      type: 'conciliacao',
    },
    {
      code: 301104,
      level: 6,
      description: 'ESTORNOS',
      parent_id: 3011,
      type: 'conciliacao',
    },
    {
      code: 301105,
      level: 6,
      description: 'TAXAS',
      parent_id: 3011,
      type: 'conciliacao',
    },
    {
      code: 3012,
      level: 4,
      description: 'INTERCOMPANY',
      parent_id: 301,
      type: 'conciliacao',
    },
    {
      code: 301201,
      level: 6,
      description: 'INTERCOMPANY',
      parent_id: 3012,
      type: 'conciliacao',
    },
    {
      code: 3013,
      level: 4,
      description: 'TRANSITORIAS',
      parent_id: 301,
      type: 'conciliacao',
    },
    {
      code: 301301,
      level: 6,
      description: 'TRANSITORIA EMPRESTIMOS',
      parent_id: 3013,
      type: 'conciliacao',
    },
    {
      code: 301302,
      level: 6,
      description: 'TRANSITORIA  ENCONTRO DE CONTAS',
      parent_id: 3013,
      type: 'conciliacao',
    },
    {
      code: 301303,
      level: 6,
      description: 'RECUPERACAO DESPESAS',
      parent_id: 3013,
      type: 'conciliacao',
    },
    {
      code: 3014,
      level: 4,
      description: 'SAIDAS APLICACOES',
      parent_id: 301,
      type: 'conciliacao',
    },
    {
      code: 301401,
      level: 6,
      description: 'AQUISICAO DE ACOES/COTAS DE CA',
      parent_id: 3014,
      type: 'conciliacao',
    },
    {
      code: 301402,
      level: 6,
      description: 'VALORES BLOQUEADOS',
      parent_id: 3014,
      type: 'conciliacao',
    },
    {
      code: 301403,
      level: 6,
      description: 'DEBENTURES',
      parent_id: 3014,
      type: 'conciliacao',
    },
  ]

  for (const category of categories) {
    await prisma.category.create({
      data: category,
    })
  }
}
