import type {Angle} from "../mathFonctions/trigo";
import {point, pointSurCercle} from "./points";
import {segment} from "./segments";
import {cercle, cercleCentrePoint} from "./cercle";
import {egal} from "../outils/comparaisons";
import {colorToLatexOrHTML, mathalea2d, vide2d} from "../../modules/2dGeneralites";
import {latexParPoint} from "./textes";
import {codageAngle} from "./angles";

/**
 *
 * @param {Angle} angle
 * @param {string} cosOrSin
 * @returns string
 */
export function cercleTrigo(angle: Angle, cosOrSin = 'cos') {
    const monAngle = parseInt(angle.degres ?? '0')
    const r = 5
    const tAngle = angle.radians
    const tCos = (Array.isArray(angle.cos)) ? angle.cos[0] : angle.cos
    const tSin = (Array.isArray(angle.sin)) ? angle.sin[0] : angle.sin
    const O = point(0, 0)
    const I = point(r, 0)
    const J = point(0, r)
    const I2 = point(-r, 0)
    const J2 = point(0, -r)
    const s1 = segment(I, I2)
    const s2 = segment(J, J2)
    const c = cercleCentrePoint(O, I)
    const c2 = cercle(O, 5.7)
    const M = pointSurCercle(c, monAngle, '')
    const M2 = pointSurCercle(c2, monAngle, '')
    const sOM = segment(O, M, 'blue')
    const sOI = segment(O, I, 'blue')
    sOM.epaisseur = 3
    sOI.epaisseur = 3
    const x = point(M.x, 0)
    const y = point(0, M.y)
    const sMx = !egal(M.y, 0) ? segment(M, x) : vide2d()
    sMx.pointilles = 5
    const sMy = !egal(M.x, 0) ? segment(M, y) : vide2d()
    sMy.pointilles = 5
    const texteAngle = latexParPoint(tAngle ?? '0', M2)
    const Rx = point(M.x, (M.y < 0) ? 1.5 : -1.5)
    const Ry = point((M.x < 0) ? 0.65 : -1.5, M.y)
    const texteCosinus = latexParPoint(tCos ?? '0', Rx)
    const texteSinus = latexParPoint(tSin ?? '0', Ry)
    const sCos = segment(O, point(M.x, 0))
    const sSin = segment(O, point(0, M.y))
    sCos.epaisseur = 3
    sSin.epaisseur = 3
    const marqueAngle = codageAngle(I, O, M)
    marqueAngle.color = colorToLatexOrHTML('blue')
    marqueAngle.epaisseur = 3
    const objetsTrigo = []
    if (cosOrSin === 'cos') {
        objetsTrigo.push(texteCosinus, sCos, sMx)
    } else {
        objetsTrigo.push(texteSinus, sSin, sMy)
    }
    return mathalea2d({
        xmin: -r - 3,
        xmax: r + 3,
        ymin: -r - 1.8,
        ymax: r + 1.8,
        scale: 0.5
    }, c, texteAngle, marqueAngle, s1, s2, ...objetsTrigo, sOM, sOI)
}