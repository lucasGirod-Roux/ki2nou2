const questions = {
  au_quotidien: [
    {
      titre: "Les tâches ménagères",
      questions: [
        "Qui de vous deux déteste le plus les tâches ménagères ?",
        "Quelle est la tâche ménagère que le joueur A fait le plus souvent ?",
        "Citez un produit ménager indispensable pour vous dans une maison."
      ]
    },
    {
      titre: "Les courses",
      questions: [
        "Qui de vous deux aime le plus faire les courses ?",
        "Quel plaisir coupable achète le plus souvent le joueur B lorsqu'il fait les courses ?",
        "Vous avez 10€ et devez faire un repas pour deux : que mettez-vous dans le panier ? (3 articles)"
      ]
    },
    {
      titre: "Le matin",
      questions: [
        "Qui de vous deux se lève généralement le plus tôt ?",
        "Combien de temps environ passe le joueur A dans la salle de bain le matin ?",
        "Vous avez fait la grasse matinée et venez de vous lever. Quelle heure est-il ?"
      ]
    },
    {
      titre: "Travail",
      questions: [
        "Qui de vous deux aime le plus son activité professionnelle ou ses études actuelles ?",
        "Que préfère le joueur B dans son activité actuelle ?",
        "Vous montez votre entreprise à deux : quelle est son activité ?"
      ]
    },
    {
      titre: "Le repas",
      questions: [
        "Qui de vous deux cuisine le plus souvent ?",
        "Quel est le plat préféré du joueur A à midi ?",
        "Ce soir, vous devez préparer un dîner avec ce qu’il reste dans le frigo : que cuisinez-vous ?"
      ]
    },
    {
      titre: "Le portable",
      questions: [
        "Qui de vous deux passe le plus de temps sur son téléphone ?",
        "Quelle est l’application que le joueur B utilise le plus dans la journée ?",
        "Vous vous lancez tous les deux le défi de ne plus utiliser votre téléphone : combien de jours tenez-vous avant que l’un de vous deux craque ?"
      ]
    },
    {
      titre: "Les transports",
      questions: [
        "Qui de vous deux est le plus souvent en retard à son travail ?",
        "Combien de temps met le joueur A pour aller à son travail ou à l’école ?",
        "Votre moyen de transport habituel ne fonctionne plus ce matin : comment vous débrouillez-vous ?"
      ]
    },
    {
      titre: "Les obligations",
      questions: [
        "Qui de vous deux gère le mieux les rendez-vous et les papiers ?",
        "Quelle est la chose que le joueur B repousse toujours ?",
        "Vous avez une to-do list longue comme le bras : quelle est la première tâche ?"
      ]
    },
    {
      titre: "La gestion du quotidien",
      questions: [
        "Qui de vous deux est le plus organisé ?",
        "Quel est le plus gros oubli du joueur A récemment (rendez-vous, tâche, achat, etc.) ?",
        "Vous devez gérer une semaine de vie quotidienne sans électricité ni technologie : que faites-vous lors de vos soirées ?"
      ]
    },
    {
      titre: "Avec les animaux",
      questions: [
        "Qui de vous deux aime le plus les animaux ?",
        "Quel animal le joueur B aime-t-il (ou aurait-il aimé) avoir chez lui ?",
        "Vous adoptez une tortue ensemble : quel nom lui donnez-vous ?"
      ]
    },
    {
      titre: "Les petits tracas",
      questions: [
        "Qui de vous deux stresse le plus facilement au quotidien ?",
        "Qu’est-ce qui énerve facilement le joueur A ?",
        "Votre journée est pleine d’imprévus et de contretemps : comment vous détendez-vous le soir venu ?"
      ]
    },
    {
      titre: "Le shopping",
      questions: [
        "Qui de vous deux dépense le plus facilement au quotidien ?",
        "Quelle est la dernière chose inutile achetée par le joueur A ?",
        "Vous gagnez un bon d’achat de 500 € à dépenser ensemble dans une enseigne, laquelle choisissez-vous (hors grande surface) ?"
      ]
    },
    {
      titre: "Moments de repos",
      questions: [
        "Qui de vous deux fait le plus souvent la sieste ?",
        "Comment le joueur B se détend après une longue journée ?",
        "Vous avez une journée rien qu’à vous, sans aucune obligation : que faites-vous ?"
      ]
    },
    {
      titre: "Musique & écoute",
      questions: [
        "Qui de vous deux écoute le plus souvent de la musique ?",
        "Quelle chanson le joueur A écoute-t-il en boucle en ce moment ?",
        "Vous devez créer une playlist pour les vacances : quelle est la première musique que vous mettez dessus ?"
      ]
    },
    {
      titre: "Argent & gestion",
      questions: [
        "Qui de vous deux est le plus économe ?",
        "Combien d’argent en liquide pensez-vous que le joueur A a actuellement ?",
        "Dans quoi dépensez-vous le plus d’argent tous les deux ?"
      ]
    },
    {
      titre: "Communication",
      questions: [
        "Qui de vous deux parle le plus ?",
        "Quelle expression ou phrase revient souvent dans la bouche du joueur B ?",
        "Quel était votre dernier grand sujet de conversation ?"
      ]
    },
    {
      titre: "Le petit-déjeuner",
      questions: [
        "Qui de vous deux saute le plus souvent le petit-déjeuner ?",
        "Que prend le joueur A au petit-déjeuner les jours de repos ?",
        "Ce matin, vous vous levez plus tôt pour préparer un brunch à deux : que mettez-vous sur la table ? (Citer 5 éléments, 4 minimum doivent être identiques)"
      ]
    },
    {
      titre: "Météo & humeur",
      questions: [
        "Qui de vous deux est le plus sensible à la météo ?",
        "Que fait le joueur A quand il pleut toute la journée ?",
        "Vous avez prévu un week-end en extérieur : quelle température souhaitez-vous, à un degré Celsius près ?"
      ]
    },
    {
      titre: "Les imprévus",
      questions: [
        "Qui de vous deux gère le mieux les imprévus ?",
        "Quelle a été la dernière galère du quotidien pour le joueur A ?",
        "Vous êtes invité à un anniversaire mais vous ne voulez pas y aller : quel imprévu inventez-vous ?"
      ]
    },
    {
      titre: "Apprendre & progresser",
      questions: [
        "Qui de vous deux cherche le plus souvent à apprendre de nouvelles choses ?",
        "Quel est le dernier sujet qui a intéressé le joueur B ?",
        "Quel sujet aimeriez-vous apprendre ensemble ?"
      ]
    },
    {
      titre: "À table !",
      questions: [
        "Qui de vous deux est le plus difficile à table ?",
        "Quelle est la petite habitude du joueur B quand il mange (ex : trie les aliments, mange lentement, etc.) ?",
        "Ce soir, vous êtes conviés à un dîner et c’est à vous deux de préparer le repas : que cuisinez-vous ?"
      ]
    },
    {
      titre: "Gestion du temps",
      questions: [
        "Qui de vous deux est le plus ponctuel ?",
        "À quel moment de la journée le joueur A est-il le plus efficace ?",
        "Selon vous, combien de temps prennent les tâches que vous réalisez ?"
      ]
    },
    {
      titre: "Moments solo",
      questions: [
        "Qui de vous deux a le plus besoin de moments rien qu’à soi ?",
        "Quelle est l’activité préférée du joueur B quand il est seul chez lui ?",
        "Quel objet ou accessoire est indispensable pour profiter pleinement d’un moment seul ?"
      ]
    }
  ],
  loisir: [
    {
      titre: "Jeux de société",
      questions: [
        "Quel jeu utilise des pions et un plateau ?",
        "Quel est le but du Monopoly ?",
        "Quel jeu nécessite un sablier pour jouer ?"
      ]
    },
    {
      titre: "Activités de plein air",
      questions: [
        "Quelle activité consiste à marcher en montagne ?",
        "Quel sport se pratique avec un ballon ovale ?",
        "Quel est l'équipement nécessaire pour le camping ?"
      ]
    }
  ],
  four_tout: [
    {
      titre: "Inventions du quotidien",
      questions: [
        "Qui a inventé l'ampoule électrique ?",
        "À quoi sert un micro-ondes ?",
        "Quelle invention permet de communiquer à distance ?"
      ]
    },
    {
      titre: "Animaux insolites",
      questions: [
        "Quel animal pond des œufs mais allaite ses petits ?",
        "Quel est l'oiseau le plus rapide ?",
        "Quel animal peut dormir debout ?"
      ]
    }
  ],
  personnalite: [
    {
      titre: "Figures politiques",
      questions: [
        "Qui est le président actuel de la France ?",
        "Quel est le rôle d’un député ?",
        "Quelle femme politique a marqué l'histoire du Royaume-Uni ?"
      ]
    },
    {
      titre: "Célébrités du cinéma",
      questions: [
        "Quel acteur incarne Iron Man ?",
        "Qui a réalisé le film Titanic ?",
        "Quelle actrice joue dans le film 'Gravity' ?"
      ]
    }
  ]
};
