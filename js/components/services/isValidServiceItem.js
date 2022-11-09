import { isValidFileFormat } from '../../utils/isValidFileFormat.js';

function isValidServiceItem(service) {
    if (typeof service !== 'object' ||
        Array.isArray(service)) {
        console.log('Error: service yra netinkamo tipo');
        return false;
    }

    if (service.img === undefined) {
        console.warn('Error: neduota img reiksme');
        return false;
    } else if (typeof service.img !== 'string' ||
        service.img === '') {
        console.warn('Error: img turi buti ne tuscias tekstas');
        return false;
    } else if (!isValidFileFormat(service.img, ['jpg', 'png'])) {
        console.log('Error: failo  pavadinimas neatitinka formato');
        return false;
    }

    if (service.title === undefined) {
        console.warn('Error: neduota title reiksme');
        return false;
    } else if (typeof service.title !== 'string' ||
        service.title === '') {
        console.warn('Error: title turi buti ne tuscias tekstas');
        return false;
    }

    if (service.description === undefined) {
        console.warn('Error: neduota description reiksme');
        return false;
    } else if (typeof service.description !== 'string' ||
        service.description === '') {
        console.warn('Error: description turi buti ne tuscias tekstas');
        return false;
    }

    if (service.link === undefined) {
        console.warn('Error: neduota link reiksme');
        return false;
    } else if (typeof service.link !== 'string' ||
        service.link === '') {
        console.warn('Error: link turi buti ne tuscias tekstas');
        return false;
    }

    if (service.active === undefined) {
        console.warn('Error: neduota active reiksme');
        return false;
    } else if (typeof service.active !== 'boolean') {
        console.warn('Error: active netinkamo tipo (nera boolean)');
        return false;
    }

    return true;
}

export { isValidServiceItem }