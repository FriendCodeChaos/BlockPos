//% color=200 weight=100 icon="\uf1b3"
//% block="Block Tools"
namespace blockTools {

    /**
     * Gets the block name (ID) at a world position.
     */
    //% block="block name at x %x y %y z %z"
    export function getBlockName(x: number, y: number, z: number): string {
        const p = pos(x, y, z)
        const b = blocks.blockAt(p)
        return b.id
    }
}
