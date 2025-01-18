ServerEvents.recipes(event => {
    event.shaped(
        Item.of('the_outskirts:brainstem', 1), 
        [
          'A A',
          'ACA', 
          'ABA'
        ],
        {
          A: 'minecraft:rotten_flesh',
          B: 'tconstruct:necrotic_bone',  
          C: 'minecraft:enchanted_golden_apple'}
      )
    })
