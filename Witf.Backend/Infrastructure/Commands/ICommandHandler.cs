﻿using System.Threading.Tasks;

namespace Witf.Backend.Infrastructure
{
    public interface ICommandHandler<in T, TR>
    {
        Task<TR> Handle(T command);
    }
}