// ================================================
// Tiles
// ------------------------------------------------

{
    // in future, tile might hold more data than just this.
    class Tile {
        constructor(tx, ty) {
            this.x = tx
            this.y = ty

            // holds tiletype for each layer.
            this.layers = {}
        }

        isEmpty(layername) {
            return ((this.layers[layername] === 0) || (this.layers[layername] === undefined))
        }

        getAtlasLocation(layerName) {
            let val = this.layers[layerName]
            return {
                x: ((val - 1) % game.Atlas.ImageCols) * game.Atlas.TileWidth,
                y: div(val - 1, game.Atlas.ImageCols) * game.Atlas.TileHeight
            }
        }

        draw(ctx, layer, px, py) {
            if (this.isEmpty(layer)) {
                return
            }
            let s = this.getAtlasLocation(layer)
            ctx.drawImage(game.Atlas.img, s.x, s.y, game.Atlas.TileWidth, game.Atlas.TileHeight, px, py, game.TILE_SIZE, game.TILE_SIZE)
        }
    }

    game.classes.Tile = Tile
}
