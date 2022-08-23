(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate
    const files_to_evaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    const filesToDelete = files_to_evaluate.map( file => file.flagged );

    
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Mejor
    class User { };
    interface User { };


    // Todo: Tarea
        
    // día de hoy - today
    const todayDate = new Date();
    
    // días transcurridos - elapsed time in days
    const days_elapsed: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    const directoryNumberFiles = 33;
    
    // primer nombre - first name
    const firstName = 'Fernando';
    
    // primer apellido - last name
    const lastName = 'Herrera';

    // días desde la última modificación - days since modification
    const daysSinceLastModified = 12;
    
    // cantidad máxima de clases por estudiante - max classes per student
    const maxNumberOfClassesPerStudent = 6;


})();