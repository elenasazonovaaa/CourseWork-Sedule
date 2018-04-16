module.exports = ({context, errors}) => async (req, res, next) => {
    const userId = req.params.userId || null;
    const sheduleId = req.params.sheduleId || null;

    if (userId) {
        const user = await context['Users'].findById(userId);

        if (!user) next(errors.notFound);

        req.meta.user = user;
    }

    if (sheduleId) {
        const shedule = await context['Shedules'].findOne({where: {id: sheduleId, userId: req.meta.user.dataValues.id}});

        if (!shedule) {
            next(errors.custom('Shedule not found or doesn\'t associated with founded user', 'shedule_not_found', 404));
        }

        req.meta.shedule = shedule;
    }

    next();
};
