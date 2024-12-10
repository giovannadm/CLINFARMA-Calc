export const scores = [
    {
        key: 'arms',
        label: 'Escala de Adesão aos Medicamentos e ao Reabastecimento dos Medicamentos',
        description: 'Escala de avaliação da adesão aos medicamentos que pode ser aplicada em pacientes com qualquer nível de letramento.',
        targetAudience: 'Pacientes com condições crônicas que exigem uso contínuo de medicamento.',
        hintText: 'Pontuação próxima à 48 indica pior adesão aos medicamentos.',
        durationText: '5 à 10 minutos',
        optionsType: 'frequência',
        options: [
            'Nunca',
            'Às vezes',
            'Quase sempre',
            'Sempre',
        ],
        questions: [
            'Esquece de tomar seus medicamentos?',
            'Decide nao tomar seus medicamentos naquele dia?',
            'Deixa de tomar seu medicamento porque vai a uma consulta médica?',
            'Deixa de tomar seu medicamento quando se sente melhor?',
            'Deixa de tomar seu medicamento quando se sente mal ou doente?',
            'Deixa de tomar seu medicamento quando está mais descuidado consigo mesmo?',
            'Muda a dose do seu medicamento por alguma necessidade?',
            'Esquece de tomar o medicamento quando tem que tomar mais de uma vez/dia?',
            'Esquece de ir à farmácia pegar seus medicamentos?',
            'Deixa acabar seus medicamentos?',
            'Deixa de adquirir seu medicamento por causa do preço muito caro?',
            'Se antecipa e busca seu medicamento na farmácia antes mesmo de acabar seu medicamento em casa?',
        ]
    },
    {
        key: 'act',
        label: 'Teste de controle da Asma',
        description: 'Avaliar o controle da asma nas últimas 4 semanas.',
        targetAudience: 'Pacientes adultos diagnosticados com asma.',
        hintText: 'Quanto maior o escore, mais controlada é a asma.',
        durationText: '3 à 7 minutos',
        optionsType: 'intensidade',
        options: [
            'De jeito nenhum',
            'Apenas algumas vezes',
            'Algumas vezes',
            'Muitas vezes',
            'Mais que uma vez por dia',
        ],
        questions: [
            'A asma prejudicou suas atividades no trabalho, na escola ou em casa?',
            'Como está o controle da sua asma?',
            'Quantas vezes você teve falta de ar?',
            'A asma acordou você à noite ou mais cedo que de costume?',
            'Quantas vezes você usou o remédio por inalação para alívio?',
        ]
    },
    {
        key: 'dpoc',
        label: 'Teste de Avaliação da Doença Pulmonar Obstrutiva Crônica (DPOC)',
        description: 'Avaliar o impacto da DPOC na vida do paciente e monitorar a progressão da doença ao longo do tempo.',
        targetAudience: 'Pacientes diagnosticados com Doença Pulmonar Obstrutiva Crônica.',
        hintText: 'Quanto maior o escore, mais impacto a DPOC causa na qualidade de vida do paciente.',
        durationText: '3 à 7 minutos',
        optionsType: 'intensidade',
        options: [
            'Nenhum Impacto',
            ' ',
            ' ',
            ' ',
            'Impacto muito significativo',
        ],
        questions: [
            'Você tem tosse com frequência?',
            'O seu peito está cheio de catarro (secreção)?',
            'Você sente uma grande pressão no peito?',
            'Você sente bastante falta de ar quando sobe uma ladeira ou um andar de escadas?',
            'Você se sente limitado nas suas atividades em casa?',
            'Você não se sente confiante para sair de casa por causa da sua doença pulmonar?',
            'Você não dorme profundamente devido à sua doença pulmonar?',
            'Você não tem nenhuma energia (disposição)?'
        ]
    }
];